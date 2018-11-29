import React from 'react';
import Icon from 'app/components/elements/Icon';
import { APP_NAME } from 'app/client_config';

export default function MiniHeader() {

    let style = {width: '36px', height: '36px'};

    return <header className="Header">
        <div className="Header__top header">
            <div className="expanded row">
                <div className="columns">
                    <ul className="menu">
                        <li className="Header__top-logo">
                            <a href="/"><img src="/images/logo.png" style={style} /></a>
                        </li>
                        <li className="Header__top-steemit show-for-medium"><a href="/">{APP_NAME.toLowerCase()}</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </header>;
}
