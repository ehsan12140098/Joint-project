import { useMemo } from 'react';
import { useParams } from 'react-router-dom';

import { Grid } from '@mui/material';

import BreadCrumbs from 'Components/shared/BreadCrumbs/BreadCrumbs';
import BlogsMainSlider from 'Components/Blogs/BlogsSlider/BlogsSlider';
import BlogsMain from 'Components/Blogs/BlogsMain/BlogsMain';
import BlogsSide from 'Components/Blogs/BlogsSide/BlogsSide';
import useIsDesktopDisplay from 'hooks/useIsDesktopDisplay';

const links = [
  { href: '/', text: 'بیسان' },
  { href: '#blogs', text: 'بلاگ ها' },
];

export default function BlugsPage() {
  const { slug } = useParams();
  const isSmOrBigger = useIsDesktopDisplay('sm');
  const isLgOrBigger = useIsDesktopDisplay();

  const breadCrumbs = useMemo(() => {
    // const array = slug.split('-');
    // const breadCrumbText = array[array.length - 1];
    const breadCrumbText = slug.split('-').at(-1);
    return [...links, { href: '#', text: breadCrumbText }];
  }, [slug]);

  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: isSmOrBigger ? 'flex-start' : 'center',
        }}
      >
        <BreadCrumbs links={breadCrumbs} />
      </div>

      <BlogsMainSlider />
      <div
        style={{
          marginTop: '24px',
          borderTop: '1px solid rgb(229, 231, 235)',
          paddingTop: '24px',
        }}
      >
        <Grid
          container
          spacing={2}
          direction={isLgOrBigger ? 'row' : 'column-reverse'}
        >
          <Grid item xs={12} lg={4}>
            <BlogsSide />
          </Grid>
          <Grid item xs={12} lg={8}>
            <BlogsMain />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
