

import React, { useState } from 'react';

import Header from './components/Header';
import { FeedbackData } from './data/feedbackData';
import FeedbackList from './components/FeedbackList';

export default function App() {

    const [feedback, setFeedback] = useState(FeedbackData);

    return (
        <>
            <Header />

            <div className="container">
                <FeedbackList feedback={feedback} />
            </div>
        </>
    )
}
