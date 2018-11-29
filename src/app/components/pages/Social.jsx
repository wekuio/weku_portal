import React from 'react';

class Social extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="column large-12 medium-12 small-12">
                    <img src = "/images/social.jpg" alt="social" />
                </div>
            </div>
        );
    }
}

module.exports = {
    path: 'social',
    component: Social
};
