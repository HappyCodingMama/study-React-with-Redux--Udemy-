import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';


const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                Are you sure you want to do this?
            </ApprovalCard>


            <ApprovalCard>
            <CommentDetail author="Sam" timeAgo="Today at 4:45PM" content="Nice blog post" avatar={faker.image.image()} />
            </ApprovalCard>
            <ApprovalCard>
            <CommentDetail author="Alex" timeAgo="Today at 6:24PM" content="I like the subject" avatar={faker.image.image()} />
            </ApprovalCard>
            <ApprovalCard>
            <CommentDetail author="Jane" timeAgo="Today at 3:13PM" content="Good!" avatar={faker.image.image()} />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));