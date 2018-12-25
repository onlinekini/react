import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";

import ApprovalCard from './ApprovalCard'
import CommentDetail from "./CommentDetail";

const App = () => {
  return (
    <div className="ui container comments">
        <ApprovalCard>
            <div>
               <h4>Warning!</h4>
            </div>
            There is a string and &lt;div/&gt; element passed here without a real component
        </ApprovalCard>
        <ApprovalCard>
            <CommentDetail author="Sam" timeAgo="Today at 4:00 pm" text="Nice Blog" avatar={faker.image.avatar()}
            />
        </ApprovalCard>
        <ApprovalCard>
            <CommentDetail
                author="Alex" timeAgo="Today at 6:00 pm" text="BORRRINGG!!!" avatar={faker.image.avatar()}
            />
        </ApprovalCard>
        <ApprovalCard> 
            <CommentDetail
                author="Jane" timeAgo="Today at 1:00 pm" text="good one" avatar={faker.image.avatar()}
            />
        </ApprovalCard>
      
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
