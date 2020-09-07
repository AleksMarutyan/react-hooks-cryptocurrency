import React from 'react';
import { API_URL } from '../../config';
import { handleResponse} from '../../helpers';
import './Search.css';
import Loading from './Loading';
import { withRouter} from 'react-router-dom';
 
class Search extends React.Component {
    constructor() {
        super();
        this.state = {
            searchQuery: '',
            searchResults: [],
            loading: false
        }
    }

    handleChange = (e) => {
        const searchQuery = e.target.value;
        this.setState({
            searchQuery
        })
        
        this.setState({
            loading: true
        })

        fetch(`${API_URL}/autocomplete?searchQuery=${searchQuery}`)
        .then(handleResponse)
        .then(result => {
            this.setState({
                loading: false,
                searchResults: result
            })
        })
    }
    handleRedirect = (currencyId) =>{
        this.props.history.push(`/currency/${currencyId}`)
        this.setState({
            searchQuery : '',
            searchResults: [],
        })
    }
    renderSearchResult = () => {
        const { searchResults, searchQuery, loading} = this.state;
        if (!searchQuery ){
            return ''
        }
        if (searchResults.length > 0) {
            return (
                <div className="Search-result-container">
                    {
                        searchResults.map((result) => {
                            return (
                                <div
                                    key={result.id}
                                    className="Search-result"
                                    onClick = {() => this.handleRedirect(result.id)}
                                >
                                    {result.name} ({result.symbol})
                                </div>
                            )
                        })
                    }
                </div>
            )
        }

        if (!loading) {
            return (
                <div className="Search-result-container">
                    <div className="Search-no-result">
                        No result found
                    </div>
                </div>
            )
            
        }
        if (!searchQuery ){
            return ''
        }    
    };

    render() {
        const { loading , searchQuery } = this.state;

        return (
            <div className="Search">
                <div>
                    <span
                        className="Search-icon"
                    />
                    <input
                        type="text"
                        value = {searchQuery}
                        className="Search-input"
                        placeholder="Currency name"
                        onChange={this.handleChange}
                    />
                    {
                      loading && (
                          <div className = 'Search-loading'>
                              <Loading 
                                    width = '10px'
                                    height = '10px'
                              />
                          </div>   
                    ) 
                    }
                </div>

                {this.renderSearchResult()}
            </div>
        )
    }
}

export default withRouter(Search);