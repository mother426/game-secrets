import React, { useEffect, useState } from 'react';
import api from '../utils/api';

const FullPost = props => {
  const [state, setState] = useState([]);

  useEffect(() => {
    api.getPost(props.match.params.id)
    .then(res => setState(res.data))
    .catch(err => console.log(err))
  }, []);

    return(
      <>
        <div key={state._id} className="card commented-main-card">
                    <div className="card-horizontal">
                        <div className="img-square-wrapper">
                        </div>
                        <div className="card-body">
                            <h4 className="card-title">{state.title}</h4>
                            <h6>Posted By: {state.author}</h6>
                            <p className="card-text">
                                {state.body}
                            </p>
                            <div className="card-footer">
                                <small className="text-muted">{state.date}</small>
                            </div>
                        </div>
                    </div>
                </div>
                
        <section>
          <div className="card comment-card">
            {state.comments}
          </div>
        </section>
      </>
    );
};

export default FullPost;