import React, { useState } from 'react';
import { Button, message } from 'antd';
import { useMutation } from '@apollo/react-hooks';

import { User } from '@leaa/common/entrys';
import { UpdateUserInput } from '@leaa/common/dtos/user';
import { IPage } from '@leaa/dashboard/interfaces';
import { PageCard } from '@leaa/dashboard/components/PageCard';
import { SubmitBar } from '@leaa/dashboard/components/SubmitBar/SubmitBar';
import { CREATE_USER } from '@leaa/common/graphqls/user.mutation';
import { UserInfoForm } from '../_components/UserInfoForm/UserInfoForm';

import style from './style.less';

export default (props: IPage) => {
  let userInfoFormRef: any;

  const [submitVariables, setSubmitVariables] = useState<{ user: UpdateUserInput }>({
    user: {},
  });

  const [createUserMutate, { loading: submitLoading }] = useMutation<{ createUser: User }>(CREATE_USER, {
    variables: submitVariables,
    onError(e) {
      message.error(e.message);
    },
    onCompleted({ createUser }) {
      console.log(createUser.id);
      message.success('Create Successful');
      props.history.push(`/users/${createUser.id}`);
    },
  });

  const onSubmit = async () => {
    let hasError = false;
    let submitData: UpdateUserInput = {};

    userInfoFormRef.props.form.validateFieldsAndScroll(async (err: any, formData: User) => {
      if (err) {
        hasError = true;
        message.error(err[Object.keys(err)[0]].errors[0].message);
      }

      submitData = {
        ...submitData,
        ...formData,
      };
    });

    if (hasError) {
      return;
    }

    await setSubmitVariables({
      ...submitVariables,
      ...{ user: submitData },
    });
    await createUserMutate();
  };

  return (
    <PageCard title={props.route.name} className={style['page-wapper']} loading={false}>
      <UserInfoForm
        wrappedComponentRef={(inst: unknown) => {
          userInfoFormRef = inst;
        }}
      />

      <SubmitBar>
        <Button type="primary" size="large" loading={submitLoading} onClick={onSubmit}>
          Submit
        </Button>
      </SubmitBar>
    </PageCard>
  );
};
