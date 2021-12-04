import React, { cloneElement } from 'react';
import toChildrenArray from '../../utils/toChildrenArray';
import Step from './Step';
import { StepWrapper } from './styles';
import { StepsProps } from './types';

const Steps: React.FC<StepsProps> = (props) => {
  const { children, current, progressDot, onChange, allowChangeOnClick = true } = props;

  const onStepClick = (next: number) => {
    if (onChange && current !== next && allowChangeOnClick) {
      onChange(next);
    }
  };

  return (
    <StepWrapper>
      {toChildrenArray(children).map((child, index) => {
        const stepNumber = index;
        const childProps = {
          stepNumber: `${stepNumber + 1}`,
          stepIndex: stepNumber,
          key: stepNumber,
          progressDot,
          onStepClick: onChange && onStepClick,
          active: stepNumber === current,
          completed: stepNumber < (current || 0),
          ...child.props,
        };

        return cloneElement(child, childProps);
      })}
    </StepWrapper>
  );
};

Step;

Steps.defaultProps = {
  current: 0,
  progressDot: false,
};

export default Steps;
