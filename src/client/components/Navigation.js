import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Slider from '@material-ui/lab/Slider';
import withStyles from '@material-ui/core/styles/withStyles';

export default class Navigation extends Component{
const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  alignment: {
    alignSelf: 'flex-end',
  },
};

function handleActive(tab) {
  alert(`A tab with this route property ${tab.props['data-route']} was activated.`);
}
render()
{
    return (
        <div>
            <Tabs style={styles.alignment}>
                <Tab label="Item One">
                    <div>
                        <h2>Tab One</h2>
                        <p>
                            This is an example tab.
                        </p>
                        <p>
                            You can put any sort of HTML or react component in here. It even keeps the component state!
                        </p>
                        <Slider name="slider0" defaultValue={0.5}/>
                    </div>
                </Tab>
                <Tab label="Item Two">
                    <div>
                        <h2 style={styles.headline}>Tab Two</h2>
                        <p>
                            This is another example tab.
                        </p>
                    </div>
                </Tab>
                <Tab
                    label="onActive"
                    data-route="/home"
                >
                    <div>
                        <h2 style={styles.headline}>Tab Three</h2>
                        <p>
                            This is a third example tab.
                        </p>
                    </div>
                </Tab>
            </Tabs>
        </div>
    );
}
}
