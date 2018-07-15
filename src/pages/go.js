import React from 'react';
import './go.css';
import PomodoroState from '../components/PomodoroState';
import Sidebar from '../components/Sidebar';
import SidebarButton from '../components/SidebarButton';
import RingingSound from '../components/RingingSound';
import Sound from 'react-sound';

const thirtyMinutes = 25 * 60 * 1000;
const twentyFiveMinutes = 25 * 60 * 1000;
const fiveMinutes = 5 * 60 * 1000;

// const thirtyMinutes = 3 * 1000;
// const twentyFiveMinutes = 2.5 * 1000;
// const fiveMinutes = 1 * 1000;

class Go extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isWorking: true,
            workCount: 1,
            isLongBreak: false,
            isAlarmOn: false,
        };
        setTimeout(() => {
            this.beginBreak();
        }, twentyFiveMinutes);
    }

    soundTheAlarm() {
        if (!document.hasFocus()) {
            this.setState({ isAlarmOn: true });
        }
    }

    setAlarmListener() {
        window.addEventListener('focus', () =>
            this.setState({ isAlarmOn: false }),
        );
    }

    beginWork() {
        this.setState(prevState => ({
            isWorking: true,
            workCount: prevState.workCount + 1,
        }));
        this.soundTheAlarm();
        this.setAlarmListener();
        setTimeout(() => {
            if (this.state.workCount % 4 === 0) {
                this.beginLongBreak();
            } else {
                this.beginBreak();
            }
        }, twentyFiveMinutes);
    }
    beginBreak() {
        this.setState({
            isWorking: false,
            isLongBreak: false,
        });
        this.soundTheAlarm();
        this.setAlarmListener();
        setTimeout(() => {
            this.beginWork();
        }, fiveMinutes);
    }
    beginLongBreak() {
        this.setState({
            isWorking: false,
            isLongBreak: true,
        });
        this.soundTheAlarm();
        this.setAlarmListener();
        setTimeout(() => {
            this.beginWork();
        }, thirtyMinutes);
    }
    render() {
        if (this.state.isWorking) {
            return (
                <PomodoroState
                    className="Pomodoro"
                    title={`Work #${this.state.workCount}`}
                    rules={['No Bathroom Breaks', 'No Snack Breaks']}
                >
                    <Sidebar>
                        <SidebarButton
                            href="https://www.youtube.com/watch?v=LsBrT6vbQa8"
                            title="Chillhop"
                        />
                        <SidebarButton
                            href="https://trello.com/b/r1dgUGDi/matt-reminders"
                            title="Trello"
                        />
                    </Sidebar>
                    <RingingSound
                        playStatus={
                            this.state.isAlarmOn
                                ? Sound.status.PLAYING
                                : Sound.status.STOPPED
                        }
                    />
                </PomodoroState>
            );
        } else {
            return (
                <PomodoroState
                    className="Break"
                    title={`${
                        this.state.isLongBreak
                            ? 'Long Break '
                            : 'Break '
                    }
                    #${this.state.workCount}`}
                    rules={[
                        'Grab Some Water',
                        'Make A Cup Of Tea',
                        'Pop to the Loo',
                        'Answer a Whatsapp',
                    ]}
                >
                    <Sidebar>
                        <SidebarButton
                            href="https://web.whatsapp.com"
                            title="Whatsapp"
                        />
                    </Sidebar>
                    <RingingSound
                        playStatus={
                            this.state.isAlarmOn
                                ? Sound.status.PLAYING
                                : Sound.status.STOPPED
                        }
                    />
                </PomodoroState>
            );
        }
    }
}

export default Go;
