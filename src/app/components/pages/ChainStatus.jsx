/* eslint react/prop-types: 0 */
import React from 'react';
import {connect} from 'react-redux';
import {api} from 'steem';
import {validate_account_name} from 'app/utils/ChainValidation';
import { Link } from 'react-router';
import tt from 'counterpart';

class ChainStatus extends React.Component {

    static propTypes = {
        //loginUser: React.PropTypes.func.isRequired,
        //serverBusy: React.PropTypes.bool
    };

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            chain_status: null
        };
    }

    componentDidMount() {
        this.setState({loading: true});
        const me = this;
        api.getDynamicGlobalProperties(function (err, result) {
            //console.log(err, result);
            me.setState({chain_status: result});
            me.setState({loading: false});
        });
    }

    render() {
        if (!process.env.BROWSER) { // don't render this page on the server
            return <div className="row">
                <div className="column">
                    <p className="text-center">LOADING..</p>
                </div>
            </div>;
        }

        const {loading, chain_status} = this.state;
        const s = this.state.chain_status;
        //if(!s) return null;

        return (
            <div className="row">
                {loading &&
                    <div className="column">Loading...</div>
                }
                {s &&
                    <div className="column">
                        <div>Head Block Number: {s.head_block_number}</div>
                        <div>Head Block ID: {s.head_block_id}</div>
                        <div>Head Block Time: {s.time}</div>

                        <div>Virtual Supply: {s.virtual_supply}</div>
                        <div>Current Supply: {s.current_supply}</div>
                        <div>Current WKD Supply: {s.current_sbd_supply}</div>

                        <div>Total Vesting Fund: {s.total_vesting_fund_steem}</div>
                        <div>Total Vesting Shares: {s.total_vesting_shares}</div>
                    </div>
                }
            </div>
        );
    }
}

module.exports = {
    path: 'status',
    component: connect(
        state => {
            return {
                loggedIn: !!state.user.get('current')
            }
        },
        null
    )(ChainStatus)
};
