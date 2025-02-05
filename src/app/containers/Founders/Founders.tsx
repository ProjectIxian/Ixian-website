import React from 'react';
import ContentWrapper from '@components/ContentWrapper/ContentWrapper';
import classes from './Founders.module.scss';
import SectionHeader from '@components/SectionHeader/SectionHeader';
import TextElement from '@components/TextElement/TextElement';
import Chip from '@components/Chip/Chip';
import { useTranslations } from 'next-intl';
import MyIcon from '@components/MyIcon/MyIcon';

const Founders = () => {
  const t = useTranslations('AboutUsPage.founders');

  return (
    <ContentWrapper
      asWrapperSection
      className={classes.founders}
      sectionClass={classes.foundersSection}
    >
      <SectionHeader
        inverseText
        chipContainer={
          <Chip isTextInversed content={'test'} variant={'outlined'} />
        }
        title={<TextElement type={'heading-md'}>{t('title')}</TextElement>}
        subtitle={<TextElement type={'body-md'}>{t('title')}</TextElement>}
      />
      <div className={classes.cardsContainer}>
        <div className={classes.card}>
          <MyIcon name={'LinkedIn'} rounded />
          <TextElement type={'label-lg'}>{t('title')}</TextElement>
        </div>
        <div className={classes.card}>
          <MyIcon name={'LinkedIn'} rounded />
          <TextElement type={'label-lg'}>{t('title')}</TextElement>
        </div>
        <div className={classes.card}>
          <MyIcon name={'LinkedIn'} rounded />
          <TextElement type={'label-lg'}>{t('title')}</TextElement>
        </div>
      </div>
    </ContentWrapper>
  );
};

export default Founders;
