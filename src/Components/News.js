import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {

    const [articles, setArticles] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [totalResult, setTotalResult] = useState(0);

    const updateNews = async () => {
        props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.api}&page=1&pageSize=${props.pageSize}`
        setLoading(false);
        props.setProgress(30);
        let fetchData = await fetch(url);
        let parsedData = await fetchData.json();
        props.setProgress(70);
        console.log(parsedData)
        setArticles(parsedData.articles);
        setTotalResult(parsedData.totalResults);
        props.setProgress(100);
    }

    useEffect(() => {
        document.title = `${props.category.charAt(0).toUpperCase() + props.category.slice(1)} - UnBaised News`;
        updateNews();
    }, []);

    // Using class based component then changed it to function based component

    // async componentDidMount() {
    //     // let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=0fc388c48c2f41d9a97cd128dedff6cf&page=1&pageSize=${props.pageSize}`
    //     // this.setState({ loading: true })
    //     // let fetchData = await fetch(url);
    //     // let parsedData = await fetchData.json();
    //     // console.log(parsedData)
    //     // this.setState({
    //     //     articles: parsedData.articles,
    //     //     totalResults: parsedData.totalResults,
    //     //     loading: false
    //     // })
    // }

    // const onPreviousClick = async () => {
    //     console.log("pre");
    //     setPage(page - 1)
    //     updateNews();
    //     // let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=0fc388c48c2f41d9a97cd128dedff6cf&page=${this.state.page - 1}&pageSize=${props.pageSize}`;
    //     // this.setState({ loading: true })
    //     // let fetchData = await fetch(url);
    //     // let parsedData = await fetchData.json();
    //     // this.setState({
    //     //     page: this.state.page - 1,
    //     //     articles: parsedData.articles,
    //     //     loading: false
    //     // })
    // }

    // const onNextClick = async () => {
    //     console.log("next");
    //     setPage(page + 1)
    //     updateNews();
    //     // let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=0fc388c48c2f41d9a97cd128dedff6cf&page=${this.state.page + 1}&pageSize=${props.pageSize}`;
    //     // this.setState({ loading: true })
    //     // let fetchData = await fetch(url);
    //     // let parsedData = await fetchData.json();
    //     // this.setState({
    //     //     page: this.state.page + 1,
    //     //     articles: parsedData.articles,
    //     //     loading: false
    //     // })
    // }

    const fetchMoreData = async () => {

        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=0fc388c48c2f41d9a97cd128dedff6cf&page=${page + 1}&pageSize=${props.pageSize}`
        setPage(page + 1)
        let fetchData = await fetch(url);
        let parsedData = await fetchData.json();
        console.log(parsedData)
        setArticles(articles.concat(parsedData.articles))
        setTotalResult(parsedData.totalResults);
    }

    return (

        <div className="container">
            <h1 className='text-center text-light' style={{ marginTop: "70px" }}>UnBaised - Top {props.category.charAt(0).toUpperCase() + props.category.slice(1)} News</h1>

            {loading && <Spinner />}

            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResult}
                loader={<Spinner />}
            >
                <div className="container">
                    <div className="row">
                        { /*!loading &&*/ articles.map((elements) => {
                            return <div className='col-md-4 my-1' key={elements.url}>
                                <NewsItem title={elements.title ? elements.title : ""} description={elements.description ? elements.description : ""} imageUrl={elements.urlToImage} newsUrl={elements.url} date={elements.publishedAt} author={elements.author} source={elements.source.name} />
                            </div>

                        })
                        }
                    </div>
                </div>
            </InfiniteScroll>

            {/* For next and previous button */}
            {/* <div className="container d-flex justify-content-center" >
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-info mx-3 my-3" onClick={this.onPreviousClick}>Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / props.pageSize)} type="button" className="btn btn-info mx-3 my-3" onClick={this.onNextClick}>Next</button>
                </div> */}
        </div>
    )
}


News.propTypes = {
    pageSize: PropTypes.number,
    category: PropTypes.string,
}

export default News;
