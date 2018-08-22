import React, {Component} from 'react'

class Article extends Component {

    constructor(props){
        super(props)

        this.state = {
            isOpen: props.defaultOpen
        }
    }

    componentWillMount() {
        console.log('---', 'mounting')
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.defaultOpen !== this.props.defaultOpen) this.setState({
            isOpen: nextProps.defaultOpen
        })
    }

    render() {
        const {article} = this.props
        const body = this.state.isOpen && <section>{article.text}</section>
        return (
            <div className="card mx-auto" style={{width: '50%'}}>
                <div className="card-header">
                    <h3>
                        {article.title}
                        <button onClick={this.handleClick} className="btn btn-primary btn-lg float-right">
                            {this.state.isOpen ? 'close' : 'open'}
                        </button>
                    </h3>
                </div>
                <div className="card-block">
                    <h6 className="text-muted">
                        Дата создания: {(new Date(article.date)).toDateString()}
                    </h6>
                    <div className="card-text">
                        {body}
                    </div>
                </div>
            </div>
        )
    }

    handleClick = () => {
        console.log('---', 'Оккк')
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}


export default Article