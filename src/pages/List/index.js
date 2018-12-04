import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SRNPage, LifeCircle } from '@souche-f2e/srn-framework';

@LifeCircle
class List extends SRNPage {
    static navigation = {
        title: '列表',
        left: {
            onPress: function(emitter, sceneProps) {
                console.log(sceneProps);
                emitter.emit('goBack');
            }
        }
    }

    constructor (props) {
        super(props);
    }

    componentWillMount () {
        console.log(List.navigation.title, '------- c_WillMount');
        this.emitter.on('goBack', this.goBack.bind(this));
    }

    /* 第一次挂载完成 */
    componentDidMount () {
        console.log(List.navigation.title, '------- c_WillMount', ' params:', this.route.params);
    }

    componentWillReceiveProps (n_props) {
        console.log(List.navigation.title, '------- c_WillReceiveProps', n_props);
    }

    shouldComponentUpdate(n_props, n_state) {
        console.log(List.navigation.title, '------- shouldComponentUpdate -------', n_props, n_state);
    }

    componentWillUpdate (n_props, n_state) {
        console.log(List.navigation.title, '------- c_WillUpdate', n_props, n_state);
    }

    componentDidUpdate (p_props, p_state) {
        console.log(List.navigation.title, '------- c_WillUpdate', p_props, p_state);
    }

    viewDidAppear () {
        console.log(List.navigation.title, '------- Appear');
        // this.store.fetch();
    }

    viewDidLoad () {
        console.log(List.navigation.title, '------- Load');
    }

    viewDidDisappear () {
        console.log(List.navigation.title, '------- Disappear');
    }

    goBack() {
        this.route.close({msg: '这个数据谁会收到？'});
    }

    render () {
        return (
            <View style={styles.container}>
                <Text>列表</Text>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default List;
