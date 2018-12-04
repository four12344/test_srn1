import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { SRNPage, SRNConfig } from '@souche-f2e/srn-framework';
import {Color, FontSize} from '@souche-ui/srn-ui';
// import SImage from '@souche-f2e/SImage';

class List extends SRNPage {
    static navigation = {
        title: '车辆详情',
        left: {
            showArrow: true,
            onPress: function(emitter, sceneProps) {
                console.log(sceneProps);
            }
        }
    }

    constructor (props) {
        super(props);
        console.log(SRNConfig.appName);
    }

    render () {
        return (
            <ScrollView style={styles.container} automaticallyAdjustContentInsets={false}>
                {/* <SImage style={styles.img} source={require('../../assets/carImg.png')}/> */}
                <Image style={styles.img} source={require('../../assets/carImg.png')} />
                <View style={styles.card}>
                    <View style={styles.paddingCommon}>
                        <Text style={[styles.titletext, styles.carTit]}>[杭州]本田雅阁2015款1.2T自动劲驰版自动劲驰版</Text>
                    </View>
                    <View>
                        <Text style={styles.greyText}>2013年6月1 | 1.5万公里 | 国五 | 浙A VH888</Text>
                    </View>
                    <View style={[styles.dispInline, styles.paddingCommon]}>
                        <View style={styles.tag}>
                            <Text style={styles.redText}>A++</Text>
                        </View>
                        <View style={styles.tag}>
                            <Text style={styles.redText}>有水泡</Text>
                        </View>
                    </View>
                    <View style={[styles.dispInline, styles.paddingCommon]}>
                        <Text style={styles.titletext}>已拒绝</Text>
                        <View style={{paddingLeft: 5}}>
                            <Text style={styles.grey2Text}>拒绝时间: 2017/08/09 12:34</Text>
                        </View>
                    </View>
                    <View style={{paddingRight: 10}}>
                        <Text numberOfLines={3} style={styles.greyText}>这里是拒绝原因，限制50个字符。这里是拒绝原因，限制50个字符。这里是拒绝原因，限制50个字符。这里是拒绝原因，限制50个字符。这里是拒绝原因，限制50个字符。这里是拒绝原因，限制50个字符。这里是拒绝原因，限制50个字符。这里是拒绝原因，限制50个字符。</Text>
                    </View>
                    <View style={[styles.line, styles.marginCommon]}/>
                    <View style={[styles.dispInlineSB, styles.paddingCommon]}>
                        <Text style={styles.titletext}>估价助手</Text>
                        <Image style={styles.backBtn} source={require('../../assets/back.png')} />
                    </View>
                </View>
                <View style={styles.card}>
                    <View style={styles.paddingCommon}>
                        <Text style={styles.titletext}>车辆分类</Text>
                    </View>
                    <View>
                        <Text style={styles.greyText}>常规竞价车</Text>
                    </View>
                    <View style={[styles.line, styles.marginCommon]}/>
                    <View style={styles.paddingCommon}>
                        <Text style={styles.titletext}>收车凭证</Text>
                    </View>
                    <View style={[styles.dispInlineSB, styles.paddingCommon]}>
                        <View style={styles.img2Wrap}>
                            <Image style={styles.img2} source={require('../../assets/carImg.png')} />
                        </View>
                        <View style={styles.img2Wrap}>
                            <Image style={styles.img2} source={require('../../assets/carImg.png')} />
                        </View>
                        <View style={styles.img2Wrap}>
                            <Image style={styles.img2} source={require('../../assets/carImg.png')} />
                        </View>
                    </View>
                </View>
                <View style={styles.card}>
                    <View style={styles.paddingCommon}>
                        <Text style={styles.titletext}>拍卖方式</Text>
                    </View>
                    <View>
                        <Text style={styles.greyText}>竞价</Text>
                        <Text style={styles.greyText}>保留价:21.00万</Text>
                        <Text style={styles.greyText}>采购价:21.00万</Text>
                    </View>
                </View>
                <View style={[styles.card, {marginBottom: 50}]}>
                    <View style={styles.paddingCommon}>
                        <Text style={styles.titletext}>备注</Text>
                    </View>
                    <View style={{paddingRight: 10}}>
                        <Text style={styles.greyText}>这里是所填写的备注这里是所填写的备注这里是所填写的备注这里是所填写的备注这里是所填写的备注</Text>
                    </View>
                </View>
            </ScrollView>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        paddingVertical: 0,
    },
    card: {
        marginBottom: 20,
        minHeight: 20,
        backgroundColor: Color.G6,
        paddingLeft: 20,
        paddingBottom: 10,
        // paddingTop: 10
    },
    carTit: {
        fontWeight: 'bold'
    },
    greyText: {
        color: Color.B2,
        fontSize: FontSize.P2,
        lineHeight: FontSize.P2 + 4
    },
    grey2Text: {
        color: Color.B3,
        fontSize: FontSize.P2,
        lineHeight: FontSize.P2 + 4
    },
    line: {
        height: 1,
        backgroundColor: Color.G2
    },
    dispInline: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    dispInlineSB: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    titletext: {
        fontSize: FontSize.P0,
        color: Color.B1
    },
    backBtn: {
        height: FontSize.P2
    },
    paddingCommon: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingRight: 20
    },
    marginCommon: {
        marginTop: 10,
        marginBottom: 10
    },
    img: {
        width: '100%'
    },
    img2Wrap: {
        width: '30%',
        height: 70,
        backgroundColor: 'red'
    },
    img2: {
        resizeMode: 'cover',
        width: '100%',
        height: '100%'
    },
    tag: {
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 4,
        borderColor: 'red',
        paddingLeft: 4,
        paddingRight: 4,
        paddingTop: 4,
        paddingBottom: 4,
        marginRight: 5
    },
    redText: {
        fontSize: FontSize.P2,
        lineHeight: FontSize.P2,
        color: 'red'
    }
});

export default List;
