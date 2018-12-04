import React from 'react';
import {
    StyleSheet,
    View,
    InteractionManager,
    DatePickerIOS,
    Text
} from 'react-native';
// import SRNNative from '@souche-f2e/srn-native';

import { SRNPage, observer, LifeCircle } from '@souche-f2e/srn-framework';

// 从新版组件库中引入一个Button组件
import { Button } from '@souche-ui/srn-ui';

// 引入子组件
import CarItemView from './components/CarItemView';

// 引入当前页面关联的 store
// [SRNStore 数据管理] http://fedoc.sqaproxy.souche.com/#/rn/framework/framework_SRNStore
import IndexStore from '../../stores/indexStore';

/**
 * 如果组件需要和store自动联动，请添加此注解 @observer，否则不需要添加
 * [如何实现数据绑定] http://fedoc.sqaproxy.souche.com/#/rn/develop/basic_data_binding
 */
@observer
@LifeCircle
class Index extends SRNPage {

    // 定义当前页面的title，navigation中的所有元素都可以通过此处自定义
    // [SRNavigator 导航器] http://fedoc.sqaproxy.souche.com/#/rn/navigator/srn-navigator
    static navigation = {
        title: {
            text: '首页2'
        },
        right: [{
            text: '分享',
            onPress: function(emitter, sceneProps) {
                console.log(sceneProps);
            }
        },{
            text: '设置',
            onPress: function(emitter, sceneProps) {
                console.log(sceneProps);
            }
        },{
            /**
            * 可以传入自定义组件
            */
            component: ()=>{
                return <Text>aaa</Text>
            },
            onPress: function(emitter, sceneProps) {
                /**
                * 与当前类所有实例共享的 emitter ，可以与页面通信
                */
                console.log(sceneProps);
            }
        }],
        left: {
            text: '返回',
            onPress: function(emitter, sceneProps) {
                console.log(sceneProps);
            }
        }
    };

    /**
     * 组件构造函数，第一个被调用的生命周期
     */
    constructor () {
        super();
        // 务必在此实例化页面的 store
        this.store = new IndexStore();
    }

    /**
     * 组件即将挂载的生命周期
     */
    componentWillMount () {
        // 1、组件刚经历constructor,初始完数据
        // 2、组件还未进入render，组件还未渲染完成，dom还未渲染
        // 3、不推荐在这里面写ajax请求
        console.log(Index.navigation.title.text, '------- c_WillMount');
        // 将页面数据构造放在此方法内，可以保证性能（在页面切换动画完毕后执行）
        InteractionManager.runAfterInteractions(() => {
            this.getData();
        });
    }

    componentDidMount () {
        // 组件【第一次】渲染完成，此时dom节点已经生成，可以在这里调用ajax请求，返回数据setState后组件会重新渲染
        console.log(Index.navigation.title.text, '------- c_tDidMount');
    }

    componentWillReceiveProps (nextProps) {
        // 在接受父组件改变后的props需要重新渲染组件时用到的比较多
        console.log(Index.navigation.title.text, '------- c_WillReceiveProps', nextProps);
    }

    shouldComponentUpdate (nextProps, nextState) {
        // 唯一用于控制组件重新渲染的生命周期
        // 因为react父组件的重新渲染会导致其所有子组件的重新渲染，这个时候其实我们是不需要所有子组件都跟着重新渲染的，因此需要在子组件的该生命周期中做判断
        console.log(Index.navigation.title.text, '------- shouldComponentUpdate -------', nextProps, nextState);
    }

    componentWillUpdate (nextProps, nextState) {
        // shouldComponentUpdate返回true以后，组件进入重新渲染的流程
        console.log(Index.navigation.title.text, '------- c_WillUpdate', nextProps, nextState);
    }

    /**
     * 页面结构在此，每次数据改变都会引起调用此方法
     * @returns {XML}
     */
    render () {
        return (
          <View style={styles.container}>
              <CarItemView recommendCar={this.store.recommendCar} />
              <Button onPress={
                  () => {
                      this.toList();
                  }
              }>跳转到列表页面</Button>
              <DatePickerIOS
                date={new Date()}
                mode="datetime"
                onDateChange={()=>{

                }}
              />
          </View>
        );
    }

    componentDidUpdate (prevProps, prevState) {
        // 组件更新完毕后，react只会在第一次初始化成功会进入componentDidmount,
        // 之后每次重新渲染后都会进入这个生命周期，这里可以拿到 prevProps 和 prevState ，即更新前的props和state。
        console.log(Index.navigation.title.text, '------- c_DidUpdate', prevProps, prevState);
    }

    componentWillUnmount () {
        // 1.clear你在组建中所有的setTimeout,setInterval
        // 2.移除所有组建中的监听 removeEventListener
        // 3.也许你会经常遇到这个warning:
        console.log(Index.navigation.title.text, '------- c_WillUnmount');
    }

    /* 视图出现的时候调用，包括被盖住后来显示出来的时候 */
    viewDidAppear () {
        console.log(Index.navigation.title.text, '------- Appear');
        // this.store.fetch();
    }

    /* 视图第一次初始化的时候调用，在触发 viewDidAppear 之后 */
    viewDidLoad () {
        console.log(Index.navigation.title.text, '------- Load');
    }

    /* 视图出现的时候调用，包括被盖住后来显示出来的时候 */
    viewDidDisappear () {
        console.log(Index.navigation.title.text, '------- Disappear');
    }

    /* 回收的时候调用 */
    dealloc () {}

    toList () {
        // 用 Route 跳转页面
         this.route.open('/List', {indexInfo: '我来自Index'}, (data) => {
             console.log('data为Index关闭时的回调数据', data);
         });
        /**
        SRNNative.openDatePicker({
            value: '2015/07/10',
            format: "yyyy/MM/dd HH:mm",
            minDate: '2014/07/20',
            maxDate: '2016/07/29',
            rightText: '确定',
            rightColor: '#FF5050',
            rightSize: '14',
            leftText: '只能使用8年',
            leftColor: '#000000',
            leftSize: '14'
        }).then(res => {
            console.log(res);
        });
        */
    }

    getData () {
        this.store.fetch();
    }
}

// 定义样式
// [如何布局界面] http://fedoc.sqaproxy.souche.com/#/rn/develop/dev_11
const styles = StyleSheet.create({
    container: {}
});

// 导出组件
export default Index;
