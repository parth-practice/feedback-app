import FeedbackItem from "./FeedbackItem";

function FeedbackList({feedback}) {
    console.log("::::", feedback);
    if (!feedback || feedback.length === 0) {
        return <p>There are no feedback!</p>;
    }

    return (
        <div className="feedback-lis">
            {feedback.map((item) => (
                <FeedbackItem key={item.id} item={item} />
            ))}
        </div>
    )
}

export default FeedbackList;