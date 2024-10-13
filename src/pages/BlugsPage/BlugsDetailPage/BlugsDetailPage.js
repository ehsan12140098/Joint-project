import { useMemo } from 'react';
import { useParams } from 'react-router-dom';

import { Grid } from '@mui/material';
import BreadCrumbs from 'Components/shared/BreadCrumbs/BreadCrumbs';
import BlogsDetailsMain from 'Components/Blogs/BlogsDetails/BlogsDetailsMain/BlogsDetailsMain';
import BlogsDetailsSide from 'Components/Blogs/BlogsDetails/BlogsDetailsSide/BlogsDetailsSide';
import useIsDesktopDisplay from 'hooks/useIsDesktopDisplay';

const links = [
  { href: '/', text: 'بیسان' },
  { href: '#blogs', text: 'بلاگ ها' },
  { href: '/blog/دیدنی-های-ترکیه', text: 'بلاگ های ترکیه' },
  { href: '/blog/دیدنی-های-استانبول', text: 'بلاگ های استانبول' },
];

export default function BlugsDetailPage() {
  const isSmOrBigger = useIsDesktopDisplay('sm');
  const isLgOrBigger = useIsDesktopDisplay();
  const { slug } = useParams();

  const breadCrumbs = useMemo(() => {
    return [...links, { href: '#', text: slug }];
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
      <div
        style={{
          paddingTop: '24px',
        }}
      >
        <Grid
          container
          spacing={3}
          style={
            {
              // border: '1px solid blue'
            }
          }
        >
          {!isLgOrBigger && (
            <Grid item xs={12}>
              <BlogsDetailsMain />
            </Grid>
          )}
          <Grid
            item
            xs={12}
            lg={3.3}
            style={
              {
                // border: '1px solid blue'
              }
            }
          >
            <BlogsDetailsSide />
          </Grid>
          {isLgOrBigger && (
            <Grid item xs={12} lg={8.7}>
              <BlogsDetailsMain />
            </Grid>
          )}
        </Grid>
      </div>
    </div>
  );
}
