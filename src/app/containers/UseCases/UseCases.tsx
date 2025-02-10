import classes from './UseCases.module.scss';
import ContentWrapper from '@components/ContentWrapper/ContentWrapper';
import Chip from '@components/Chip/Chip';
import TextElement from '@components/TextElement/TextElement';
import Button from '@components/Button/Button';
import SectionHeader from '@components/SectionHeader/SectionHeader';
import { useTranslations } from 'next-intl';
import InteractionCard from '@components/InteractionCard/InteractionCard';
import MyIcon from '@components/MyIcon/MyIcon';

const UseCases = () => {
  const t = useTranslations('UseCases');

  return (
    <ContentWrapper
      asWrapperSection
      className={classes.useCases}
      sectionClass={classes.useCasesSection}
    >
      <SectionHeader
        chipContainer={<Chip content={t('chip')} variant={'outlined'} />}
        title={
          <TextElement type={'heading-lg'} as={'h1'}>
            {t('title')}
          </TextElement>
        }
        subtitle={
          <TextElement type={'body-md'} as={'h1'}>
            {t('subtitle')}
          </TextElement>
        }
        ctaContent={
          <Button leadingIcon={<MyIcon name={'EastRounded'} />}>
            {t('exploreUseCases')}
          </Button>
        }
      />
      <div className={classes.caseCards}>
        <InteractionCard
          onHoverHeader={
            <Chip
              content={t('inProgress')}
              variant={'outlined'}
              isTextInversed
            />
          }
          title={t('card1.title')}
          description={t('card1.subtitle')}
          hoverImageType={'iot'}
          disableScale
        />
        <InteractionCard
          onHoverHeader={
            <Chip
              content={t('inProgress')}
              variant={'outlined'}
              isTextInversed
            />
          }
          title={t('card2.title')}
          description={t('card2.subtitle')}
          hoverImageType={'access'}
          disableScale
        />
        <InteractionCard
          onHoverHeader={
            <Chip
              content={t('inProgress')}
              variant={'outlined'}
              isTextInversed
            />
          }
          title={t('card3.title')}
          description={t('card3.subtitle')}
          hoverImageType={'enterprise'}
          disableScale
        />
      </div>
    </ContentWrapper>
  );
};

export default UseCases;
