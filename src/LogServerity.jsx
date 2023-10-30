import React from 'react';
import { Tag } from 'antd';
import {
  WarningOutlined,
  InfoCircleOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined,
  ExclamationCircleOutlined,
} from '@ant-design/icons';

const severityIcons = {
  0: <CloseCircleOutlined style={{ color: 'red' }} />,  // Error
  1: <ExclamationCircleOutlined style={{ color: 'orange' }} />, // Warning
  2: <CheckCircleOutlined style={{ color: 'green' }} />, // Info
  3: <InfoCircleOutlined style={{ color: 'blue' }} />, // Debug
};

const LogSeverityIcon = ({ severity }) => {
  return (
    <Tag icon={severityIcons[severity]}>
      {severity === 0 ? 'Error' : severity === 1 ? 'Warning' : severity === 2 ? 'Info' : 'Debug'}
    </Tag>
  );
};

export default LogSeverityIcon;
