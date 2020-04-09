import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native'
import BackgroundAudioRecord from '../../modules/BackgroundAudioRecord'
import { BaseButton } from 'react-native-gesture-handler'
import moment from 'moment'

const HomeScreen = () => {
    useEffect(() => {
        console.log("load")
        BackgroundAudioRecord.startService()
    }, [])

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-between', paddingVertical: 200, }} >
            <BaseButton
                onPress={() => {
                    try {
                        BackgroundAudioRecord.saveRecording(300, "Recording-" + moment().format("YYYY-MM-DD-h:mm:ss"), (state: string) => console.log(state))
                    } catch (error) {

                    }
                }}
            >
                <Text>5분 저장 Save Recording</Text>
            </BaseButton>
            <TouchableWithoutFeedback
                onPress={() => {
                    try {
                        BackgroundAudioRecord.saveRecording(900, "Recording-" + Date.now(), (state: string) => console.log(state))
                    } catch (error) {

                    }
                }}
            >
                <Text>15분 저장 Save Recording</Text>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
                onPress={() => {
                    try {
                        BackgroundAudioRecord.saveRecording(1800, "Recording-" + Date.now(), (state: string) => console.log(state))
                    } catch (error) {

                    }
                }}
            >
                <Text>30분 저장 Save Recording</Text>
            </TouchableWithoutFeedback>

        </View>
    )
}

const styles = StyleSheet.create({})

export default HomeScreen
