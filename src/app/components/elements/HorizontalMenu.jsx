import React from 'react';
import { Link } from 'react-router'
import Icon from 'app/components/elements/Icon';

export default class HorizontalMenu extends React.Component {
    static propTypes = {
        items: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
        title: React.PropTypes.string,
        className: React.PropTypes.string,
        hideValue: React.PropTypes.string,
    };

    render() {
        const {items, title, className, hideValue} = this.props;
        return <ul className={'HorizontalMenu menu' + (className ? ' ' + className : '')}>
            {title && <li className="title">{title}</li>}
            {items.map(i => {
                if(i.value === hideValue) return null
                if(i.value == 'chat' || i.value == '聊天') return <li key={i.value}><a className={i.active ? 'active' : ''} href="http://weku.io/chat" target="_blank">{i.value}</a></li>
                if(i.value == 'video' || i.value == '视频') return <li key={i.value}><a className={i.active ? 'active' : ''} href="http://weku.io/tube" target="_blank">{i.value}</a></li>
                if(i.value == 'about weku' || i.value == '关于 WEKU') return <li key={i.value}><a className={i.active ? 'active' : ''} href="https://weku.io" target="_blank">{i.value}</a></li>
                if(i.value == 'Buy Weku') 
                    return <li key={i.value}><a className={i.active ? 'active' : ''} href="https://tokens.weku.io" target="_blank">{i.value}</a></li>
                return <li key={i.value} className={i.active ? 'active' : ''}>
                    {i.link ? <Link to={i.link} onClick={i.onClick}>
                        {i.icon && <Icon name={i.icon} />}{i.label ? i.label : i.value}
                    </Link> :
                    <span>
                        {i.icon && <Icon name={i.icon} />}{i.label ? i.label : i.value}
                    </span>
                    }
                </li>
            })}
        </ul>;
    }
}
