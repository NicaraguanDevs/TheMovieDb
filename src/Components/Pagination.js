import React, {Component} from 'react';

class Pagination extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 1
        }
    }

    render() {
        return (
            <div className="ui buttons paginator">
                <button onClick={this.props.previousPage} className="ui labeled icon button">
                    <i className="left chevron icon"/>
                    Previous
                </button>
                <button className="ui button">
                    {this.state.page}
                </button>
                <button onClick={this.props.nextPage} className="ui right labeled icon button">
                    Next
                    <i className="right chevron icon"/>
                </button>
            </div>
        );
    }
}

export default Pagination;