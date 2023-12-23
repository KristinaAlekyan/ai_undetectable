import { useParams } from "react-router-dom";
import postData from "../Posts/data";
import ContainerUI from "../../shared/ContainerUI";

const Posts = () => {
  const { postId } = useParams();
  const arrayId = postId - 1;

  return (
    <main className="px-[20px] py-[30px] sm:px-[50px] sm:py-[40px] lg:px-[80px] lg:py-[100px]">
      <div className="flex flex-col bg-[#F0F1F9] p-[15px] sm:p-[30px] rounded-[10px] lg:rounded-[20px]">  
        <ContainerUI
          isExpandable={true}
          imgUrl={`/post_${postId}.png`}
          title={postData[arrayId].title}
          description={postData[arrayId].description}
        />
        <div className="flex flex-col gap-[5px] sm:gap-[15px] lg:gap-[30px] py-[30px] pb-[12px] lg:pb-0">
          {
            postData[arrayId].info.map((item) => {
              return (
                <div key={item.id} className="flex flex-col gap-[5px] sm:gap-[15px] lg:gap-[30px] text-[#3B457B]">
                  <div className="text-sm	sm:text-xl font-semibold sm:leading-5">
                    {item.title}
                  </div>

                  <div className="flex flex-col gap-[5px] sm:gap-[15px] lg:gap-[30px] text-[10px] sm:text-base font-normal">
                    {
                      item.description.map((i) => {
                        return (
                          <div key={i.id} className="sm:leading-5">
                            {i.part}
                          </div>
                        )
                      })                    
                    }
                  </div>
                </div>                
              )
            })
          }
        </div>
      </div>
    </main>
  );
}

export default Posts;