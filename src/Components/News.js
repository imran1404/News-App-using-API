import React, { Component } from 'react'
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types'



export class News extends Component {
    static propTypes = {
        pageSize: PropTypes.number,
        category: PropTypes.string,
    }
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            page: 1,
            loading: false
        }
        document.title = `${this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)} - UnBaised News`
    }
    async updateNews(){
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=0fc388c48c2f41d9a97cd128dedff6cf&page=1&pageSize=${this.props.pageSize}`
        this.setState({ loading: true })
        let fetchData = await fetch(url);
        let parsedData = await fetchData.json();
        console.log(parsedData)
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        })
    }
    async componentDidMount() {
            this.updateNews();
        // let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=0fc388c48c2f41d9a97cd128dedff6cf&page=1&pageSize=${this.props.pageSize}`
        // this.setState({ loading: true })
        // let fetchData = await fetch(url);
        // let parsedData = await fetchData.json();
        // console.log(parsedData)
        // this.setState({
        //     articles: parsedData.articles,
        //     totalResults: parsedData.totalResults,
        //     loading: false
        // })
    }


    onPreviousClick = async () => {
        console.log("pre");
        this.setState({page: this.state.page - 1})
        this.updateNews();
        // let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=0fc388c48c2f41d9a97cd128dedff6cf&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        // this.setState({ loading: true })
        // let fetchData = await fetch(url);
        // let parsedData = await fetchData.json();
        // this.setState({
        //     page: this.state.page - 1,
        //     articles: parsedData.articles,
        //     loading: false
        // })
    }


    onNextClick = async () => {
        console.log("next");
        this.setState({page: this.state.page + 1})
        this.updateNews();
        // let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=0fc388c48c2f41d9a97cd128dedff6cf&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        // this.setState({ loading: true })
        // let fetchData = await fetch(url);
        // let parsedData = await fetchData.json();
        // this.setState({
        //     page: this.state.page + 1,
        //     articles: parsedData.articles,
        //     loading: false
        // })
    }


    render() {
        return (
            <div className="container my-3">
                <h1 className='text-center my-5'>UnBaised - Top {this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)} News</h1>
                {this.state.loading && <Spinner />}
                <div className="row">
                    {!this.state.loading && this.state.articles.map((elements) => {
                        return <div className='col-md-4 my-1' key={elements.url}>
                            <NewsItem title={elements.title ? elements.title.slice(0, 40) : ""} description={elements.description ? elements.description.slice(0, 66) : ""} imageUrl={elements.urlToImage} newsUrl={elements.url} date={elements.publishedAt} author={elements.author} source={elements.source.name} />
                        </div>
                    })
                    }
                </div>
                <div className="container d-flex justify-content-center" >
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-info mx-3 my-3" onClick={this.onPreviousClick}>Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-info mx-3 my-3" onClick={this.onNextClick}>Next</button>
                </div>
            </div>
        )
    }
}

export default News;
