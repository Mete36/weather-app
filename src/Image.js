import React from 'react';

const image = {
    position: 'fixed',
    height: '100%',
    width: '100%',
    top: 0,
    left:0,
    zIndex: -1
}

const Image = (props) => {
    const farmId = props.data.farm;
    const serverId = props.data.server;
    const id = props.data.id;
    const secret = props.data.secret;
    return (
      <img className="bg_image" style={image} src={`https://farm${farmId}.staticflickr.com/${serverId}/${id}_${secret}_h.jpg`} />
    )
}

export default Image;