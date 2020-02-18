import React, {Component} from 'react';

class Pagination extends Component {
    render() {
        return (
            <div className="ui buttons paginator">
                <button onClick={this.props.previousPage} className="ui labeled icon button">
                    <i className="left chevron icon"/>
                    Previous
                </button>
                <button className="ui button">
                    {this.props.actualPage}
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