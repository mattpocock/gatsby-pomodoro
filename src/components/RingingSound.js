import React from 'react';
import Sound from 'react-sound';

const RingingSound = props => (
    <Sound url="/static/metronome.mp3" loop {...props} />
);

export default RingingSound;
