import React, {Component, PureComponent} from 'react'

class Article extends PureComponent {

    constructor(props){
        super(props)

        this.state = {
            isOpen: props.defaultOpen,
            count: 0
        }
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     return this.state.isOpen !== nextState.isOpen
    // }

    componentWillMount() {
        console.log('---', 'mounting')
    }

    componentWillReceiveProps(nextProps) {
        console.log('---', 'Will Receive Props')
        if (nextProps.defaultOpen !== this.props.defaultOpen) this.setState({
            isOpen: nextProps.defaultOpen
        })
    }

    componentWillUpdate() {
        console.log('---', 'Will Update')
    }

    render() {
        const {article} = this.props
        const body = this.state.isOpen && <section>{article.text}</section>
        return (
            <div className="card mx-auto" style={{width: '50%'}}>
                <div className="card-header">
                    <h3 onClick = {this.incrementCounter} >
                        {article.title}
                        cliked {this.state.count}
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
        console.log('---', 'Клик')
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    incrementCounter = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
}


export default Article