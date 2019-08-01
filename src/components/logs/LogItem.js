import React from 'react'
import Moment from 'react-moment'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { deleteLog, setCurrent } from '../../actions/logActions'

import M from 'materialize-css/dist/js/materialize.min.js'

const LogItem = ({ log, deleteLog, setCurrent }) => {
    const onDelete = () => {
        deleteLog(log.id);
        M.toast({ html: 'Log Deleted!'})
    }

    return (
        <li className="collection-item grey darken-3 ">
            <div>
                <a 
                    className={`modal-trigger ${log.attention ? 'red-text' : 'blue-text'} `} href="#edit-log-modal"
                    onClick={() => setCurrent(log)}
                    >
                    {log.message}
                </a>
            <br/>
            <span className="grey-text">
                <span className="white-text">ID #{log.id}</span> last updated by{' '}<span className="span white-text">{log.tech}</span>
               {' '} on <Moment format='MMM Do YYYY, h:mm:ss a'>{log.date}</Moment>
            </span>
            <a href="#!" onClick={onDelete} className="secondary-content">
                <i className="material-icons white-text">delete</i>
            </a>
            </div>
        </li>
    )
}

LogItem.propTypes = {
    log: PropTypes.object.isRequired,
    deleteLog: PropTypes.func.isRequired,
    setCurrent: PropTypes.func.isRequired
}

export default connect(null, { deleteLog, setCurrent })(LogItem)