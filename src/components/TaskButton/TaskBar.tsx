import Entypo from '@react-native-vector-icons/entypo';
import React from 'react';
import { Pressable, Text, View } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import TaskBarStyle from './TaskBar.style';

interface TaskBarProps {
  name: string;
  done: boolean;
  onPress: () => void;
  onRemoval: () => void;
}

const TaskBar: React.FC<TaskBarProps> = ({ name, done, onPress, onRemoval }) => {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.container}>
        <View style={{ flexDirection: 'row' }}>
          <BouncyCheckbox
            isChecked={done}
            size={25}
            fillColor="#121111"
            unFillColor="#121111"
            iconStyle={{ borderColor: '#000000' }}
            innerIconStyle={{ borderWidth: 2 }}
            onPress={onPress}
          />
          <Text style={[styles.taskText, done && styles.completedText]}>
            {name}
          </Text>
        </View>
        <View style={{ marginRight: 8, flexDirection: 'row' }}>
          <Entypo onPress={onRemoval} name="trash" color="white" size={25} />
          <View style={{ width: 10 }} />
          <Entypo name="edit" color="white" size={25} />
        </View>
      </View>
    </Pressable>
  );
};

export default TaskBar;

const styles = TaskBarStyle;
