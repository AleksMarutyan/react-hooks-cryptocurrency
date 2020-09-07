import React, { Component } from 'react';
import {API_URL} from '../../config';
import Loading from '../common/Loading';
import { handleResponse } from '../../helpers';
import Table from './Table';
import './Table.css';
import Pagination from './Pagination'

class List extends Component {
    constructor() {
        super();
        this.state = {
            currencies: [],
            loading: false,
            page: 1,
            totalPages: 0,
            perPage: 20,
            error: ''
        }
        this.handlePaginationClick = this.handlePaginationClick.bind(this)
    }

    fetchCurrencies() {
        this.setState({
            loading: true
        })

        const { page, perPage } = this.state;

        fetch(`${API_URL}/cryptocurrencies/?page=${page}&perPage=${perPage}`)
        .then(resp => handleResponse(resp))
        .then(data => {
            console.log(data)
            const { currencies, totalPages } = data;
            this.setState({
                loading: false,
                currencies,
                totalPages
            })
        })

        .catch((error) => {
            this.setState({
                loading: false,
                error: error.errorMessage
            })
        })

    }

    componentDidMount() {
        this.fetchCurrencies(); 
    }

    handlePaginationClick(direction) {
        let nextPage = this.state.page; //3
        nextPage = direction === 'next' ? nextPage + 1 : nextPage - 1;
        this.setState({
            page: nextPage
        },this.fetchCurrencies)
    }

    render() {
        const { currencies, loading, error, page, totalPages } = this.state;

        if(loading) {
            return (
                <div className="loading-container">
                    <Loading />
                </div>
            )
        }

        if(error) {
            return (
                <div className="error">{error}</div>
            )
        }

        return (
            <div>
                <Table
                    currencies={currencies}
                    // historyPush={this.props.history.push}
                />

                <Pagination
                    page={page}
                    totalPages={totalPages}
                    handlePaginationClick={this.handlePaginationClick}
                />
            </div>
        )
    }
}

export default List
// this.state - state componenti hamar loclal object e vori mej gtnvox hatkutyunner@ karox e ogtagorcel miayn tvyal componenet@

