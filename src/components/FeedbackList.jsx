import FeedbackItem from "./FeedbackItem";

function FeedbackList({feedback, handleDelete}) {

    if (!feedback || feedback.length === 0) {
        return <p>There are no feedback!</p>;
    }

    return (
        <div className="feedback-lis">
            {feedback.map((item) => (
                <FeedbackItem key={item.id} item={item} handleDelete={handleDelete}/>
            ))}
        </div>
    )
}

export default FeedbackList;