import React, { useEffect, useMemo, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { ButtonUI } from "../../shared/ButtonUI";
import TextareaUI from "../../shared/TextareaUI";
import copyIcon from "../../assets/copy.svg";
import deleteIcon from "../../assets/delete.svg";
import logoIcon from "../../assets/logo.svg";
import downIcon from "../../assets/down.svg";
import CustomSelect from "../../shared/CustomSelectUI";
import { fetchAiData, submitAiForm } from "../../redux/aiUndetectetableSlice";
import { calculateWordCount, getOffset, getUserStorage } from "../../helpers";
import { LoaderSpinner } from "../../shared/LoaderSpinerUI";
import useSnackbar from "../../components/Snackbar/hooks/useSnackbar";
import { Variant } from "../../components/Snackbar/SnackbarContainer";
import { languageOptions, selectOptions } from "./data";
import { getUserRefresh } from "../../redux/getUserSessionSlice";
import { setOptionsData } from "../../redux/optionSlice";

function AiUndetectable() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [disabled, setDisabled] = useState("");
  const [userData, setUserData] = useState(getUserStorage())
  const refElemUser = useRef(null)
  const refElemWords = useRef(null)
  const refElemLanguage = useRef(null)
  const refRegularWords = useRef(null)
  const submitTextAi = useSelector(state => state.submitTextAi);
  const optionsData = useSelector(state => state.optionsData);
  const { loading } = useSelector(state => state.submitTextAi)
  const { appendSnackbar } = useSnackbar()
  const [isCheckedPremium, setIsCheckedPremium] = useState(false);
  const { regular_words, premium_words, is_premium } = userData || {};
  const [selectedLanguage, setSelectedLanguage] = useState("english");
  const onChange = (e) => {
    const { target: { value } } = e;
    dispatch(setOptionsData({ text: value }))
  };
  const { email } = getUserStorage() ? getUserStorage() : "";
  const handleSelect = (e) => {
    const { checked, id } = e.target;
    dispatch(setOptionsData({ options: { ...optionsData.options, [id]: checked } }))
  };

  const changeLanguage = (e) => {

    if (!premium_words && e.target.value !== "english") {
      appendSnackbar(Variant.error, {
        message: 'Purchase Premium Words to Enable Other Languages',
        autoHideDuration: 2000,
      },
        { top: getOffset(refElemLanguage.current).top, left: getOffset(refElemLanguage.current).left }
      )
    }
    setSelectedLanguage(e.target.value);

    setDisabled(false)
  }

  const handleDelete = () => dispatch(setOptionsData({ text: "" }));
  const handleCopy = () => navigator.clipboard.writeText(submitTextAi.text);
  const count = useMemo(() => calculateWordCount(optionsData?.text), [optionsData?.text]);
  const aiTextcount = useMemo(() => calculateWordCount(submitTextAi?.text), [submitTextAi]);
  const handleSubmit = async () => {
    if (!userData) {
      navigate("/signup")
      return;
    }
    if (is_premium && !premium_words && !regular_words) {
      appendSnackbar(Variant.error, {
        message: 'Purchase Premium Words to Enable Premium.',
        autoHideDuration: 4000,
      },
        { top: getOffset(refElemWords.current).top, left: getOffset(refElemWords.current).left }
      )
    }
    if (regular_words < count) {
      appendSnackbar(Variant.error, {
        message: 'Purchase Additional Words to Continue',
        autoHideDuration: 4000,
      },
        { top: getOffset(refRegularWords.current).top, left: getOffset(refRegularWords.current).left }
      )
    }
    if ((Object.keys(userData).length && regular_words > count) || (is_premium && premium_words)) {
      dispatch(setOptionsData({ ...optionsData, text: optionsData?.text }))
    }
    if (userData && optionsData) {
      let res = null
      if (is_premium && premium_words && isCheckedPremium) {
        res = await dispatch(fetchAiData({ optionsData, apiEndpoint: `/generate-${selectedLanguage !== "english" ? selectedLanguage : 'premium'}` }))
      } else {
        if (selectedLanguage !== "english") {
          appendSnackbar(Variant.error, {
            message: 'As a premium user, you must enable premium features to use other languages.',
            autoHideDuration: 4000,
          },
            { top: getOffset(refElemUser.current).top, left: getOffset(refElemUser.current).left }
          )
          setDisabled(true)

        } else {
          res = await dispatch(fetchAiData({ optionsData, apiEndpoint: `/generate` }))
        }
      }

      if (res) {
        await dispatch(getUserRefresh({ email }))
        setUserData(getUserStorage())
      }
    }
    dispatch(setOptionsData({ options: Object.fromEntries(Object.keys(optionsData.options).map(key => [key, false])) }));
  }

  const handleChange = (e) => {
    if (!is_premium) {
      appendSnackbar(Variant.error, {
        message: 'Error: You must be a premium user to enable premium features.',
        autoHideDuration: 4000,
      }, { top: getOffset(refElemUser.current).top, left: getOffset(refElemUser.current).left });
    }
    if (is_premium && !premium_words) {
      setDisabled(true);
      appendSnackbar(Variant.error, {
        message: 'Purchase Premium Words to Enable Premium.',
        autoHideDuration: 4000,
      }, { top: getOffset(refElemWords.current).top, left: getOffset(refElemWords.current).left });
      setIsCheckedPremium(false)
    }
    if (is_premium) {
      setIsCheckedPremium(!isCheckedPremium);
    }
    if (isCheckedPremium) {
      setDisabled(false)
    }
  };
  useEffect(() => {
    return () => {
      dispatch(submitAiForm(''))
      dispatch(setOptionsData({ options: Object.fromEntries(Object.keys(optionsData.options).map(key => [key, false])), text: "" }));
    }
    // eslint-disable-next-line 
  }, []);

  return (
    <div className="flex justify-center">
      <section className="flex flex-col px-[40px] py-[30px] sm:px-[85px] gap-[30px] w-full lg:w-[80%]">
        <div className="flex justify-center lg:order-first">
          <img src={logoIcon} alt="logo" />
        </div>
        <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center px-[25px]sm:px-0 gap-[30px] relative">
          <p ref={refRegularWords} className="border-[1px] border-[#F0F1F9] text-sm font-light text-[#FFF] p-[10px] rounded-[10px]">Regular words remaining: {(userData && userData?.regular_words > 0) ? userData.regular_words : 0}</p>
          <div ref={refElemLanguage} className="flex items-center rounded-[10px] border-[1px] border-[#F0F1F9] gap-[25px] px-[10px] py-[5px] relative">
            <p className="text-sm text-[#FFFFFF] font-light">Language</p>
            <select
              name="lang" id="lang"
              className="rounded-[10px] bg-[#F0F1F9] border-none px-[39px] py-[5px] relative text-[#3B457B] appearance-none "
              onChange={(e) => { changeLanguage(e) }}
            >
              {languageOptions.map((opt) => <option key={opt.id} value={opt.value}>{opt.name}</option>)}
            </select>
            <img src={downIcon} width="14px" height="10px" alt="down" className="absolute bottom-[15px] right-[35px]" />
          </div>
        </div>
        <div className="flex flex-col flex-wrap justify-center lg:justify-between	sm:flex-row  gap-[30px] items-center lg:order-first">
          <Link to="/pricing">
            <ButtonUI type="button" title="Purchase Words" className="bg-[#F0F1F9] text-[#3B457B] px-[43px] py-[10px] rounded-[10px] " />
          </Link>
          <div className="text-[#3B457B] relative text-sm font-medium p-[10px] rounded-[10px] bg-[#F0F1F9]" ref={refElemWords}>
            Premium word remaining: {premium_words || 0}
          </div>
          <CustomSelect selectOptions={selectOptions} withObjectOptions={true} handleSelect={handleSelect} />
        </div>

        <div className="flex flex-col lg:flex-row items-center py-[30px] gap-[60px] relative">
          <div className="flex flex-col items-center gap-[15px] w-[70%] lg:w-full  ">
            {loading && <LoaderSpinner classN="top-[20%] lg:top-[40%]" />}
            <h1 className="flex justify-center text-[#FFF] text-xl sm:text-2xl font-medium">Your Essay</h1>
            <TextareaUI onClick={handleDelete} className="p-[20px]" icon={deleteIcon} onChange={onChange} value={optionsData?.text} />
            <div className="flex items-center gap-[10px]  ">
              <ButtonUI
                title="Submit"
                className={`${disabled || !optionsData?.text.trim() ? "bg-[#A4ABD9]" : "bg-[#3B457B]"} border px-[24px] sm:px-[44px] py-[10px] justify-center text-[#F0F1F9] text-sm rounded-[20px]`}
                onClick={handleSubmit}
                disabled={disabled || !optionsData?.text.trim()}
              />
              <p className="text-[#FFF] text-[13px] sm:text-base">Word count: {count || 0}</p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-[15px] w-[70%] lg:w-full ">
            <h1 className="flex justify-center items-center text-[#FFF] text-xl sm:text-2xl font-medium text-center">Undetectable Version</h1>
            <TextareaUI
              onClick={handleCopy}
              className="p-[20px]"
              icon={copyIcon}
              placeholder="Text from AI"
              disabled={true}
              value={submitTextAi.text}
              onChange={() => null}
            />
            <div className="flex items-center">
              <p className="text-[#FFF] py-[10px]">Word count: {aiTextcount || 0} </p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center lg:justify-start " ref={refElemUser} id="enable_premium_container">
          <div className="flex px-[40px] py-[10px] rounded-[20px] border-[1px] border-[#F0F1F9] gap-[7px]">
            <input id="default-checkbox" type="checkbox" checked={isCheckedPremium} className="focus:ring-blue-500 relative dark:focus:ring-blue-600 dark:ring-offset-gray-800 checked:ring-2 dark:bg-gray-700 dark:border-gray-600" onChange={handleChange} />
            <label htmlFor="default-checkbox" className="text-[#FFF] text-xl	font-light text-gray-900 dark:text-gray-300">Enable Premium</label>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AiUndetectable