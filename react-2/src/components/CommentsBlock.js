import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import loginService from '../services/loginService'
import commentsService from '../services/commentsService'

class CommentsBlock extends Component {
    constructor(props) {
        super(props)

        this.state = {
            comments: commentsService.get(this.props.page),
            value : ""
        }
    }

    handleChange = event => {
        const value = event.target.value
        this.setState({value})
    }

    handleSubmit = event => {
        const {page} = this.props
        const {value} = this.state
        commentsService.insert(page, value)
    }

    convertComment = comment => {
        let commentResult = ''
        for (let key in comment) {
            commentResult+= comment[key]
        }
        return commentResult
    }

    deleteComment = (comment) => {
        const {page} = this.props
        commentsService.delete(page, comment)
        const comments = commentsService.get(page)
        this.setState({comments})
    }

    teste = () => {
        console.log("teste")
    }

    renderComment = (comment, id) => {        
        const {author, date, ...rest} = comment
        return(
        <div className="Comment media text-muted pt-3" key = {id}>
            <FontAwesomeIcon className="mr-2" size="3x" icon="user-circle"/>
            <p className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                <strong className="d-block text-gray-dark">{author}</strong>
                {this.convertComment(rest)}
            </p>
            {/* Icone deve aparecer somente quando o comentario for do usuario logado */}
            { (loginService.getUser().username === author) &&
            <FontAwesomeIcon onClick={() => this.deleteComment(comment)} icon="trash"/>
            }
        </div>
    )}

    render() {
        const {comments, value} = this.state
        return (
            <div className="text-left">
                <div className="my-3 p-3 bg-white rounded shadow-sm">
                    <h6 className="border-bottom border-gray pb-2 mb-0">
                        Comments
                    </h6>
                    {comments.map((comment, id) => this.renderComment(comment, id))}
                </div>
                <form onSubmit = {this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">
                            Comment
                        </label>
                        <textarea
                            disabled={loginService.isLogged() ? false : true}
                            value={value}
                            onChange={this.handleChange}
                            required="required"
                            className="form-control"
                            id="exampleInputEmail1"
                            placeholder="Insert your comment here"
                        />
                    </div>
                    <button
                        disabled={loginService.isLogged() ? false : true}
                        type="submit"
                        className="btn btn-primary"
                    >
                        Submit
                    </button>
                </form>
            </div>
        )
    }
}

export default CommentsBlock