import React from 'react';
import { connect } from 'react-redux';
  const articleStyle = {
  width: '50%',
  margin: '0 auto',
  color: 'olive'
  }
let NewsCard = ({articles}) => {
 return( articles ? <article style={articleStyle}><h1>articles.title</h1></article>: null)

}
const mapStateToProps = (state) =>  ({
  articles: state.news
})
NewsCard = connect(mapStateToProps,null)(NewsCard);

export default NewsCard;
