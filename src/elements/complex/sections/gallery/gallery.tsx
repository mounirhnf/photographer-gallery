import React from 'react';
import {Store} from 'store/types';
import {useDispatch, useSelector} from 'react-redux';

import {seekGallery, setGalleryFilter, setGalleryPreview} from 'store/actions';

import Icon from 'elements/simple/icon';

import {MdZoomOutMap as ScaleIcon} from 'react-icons/md';

import {env} from 'configs';

import buildClass from 'utility/build-class';

import cls from './gallery.module.scss';

//------------------------------------------------------------------------------

const Gallery: React.FC = () => {
  const screenType = useSelector((store: Store.State) => store.screenType);
  const galleryState = useSelector((store: Store.State) => store.gallery);
  const noOverflow = useSelector((store: Store.State) => store.noOverflow);
  
  const {
    data,
    filter,
    seek,
  } = galleryState;

  const [
    filteredData,
    setFilteredData,
  ] = React.useState<Shared.GalleryItem[]>(data);

  const dispatch = useDispatch();
  const sectionRef = React.useRef<HTMLElement | null>(null);

  // Get filters from gallery items
  const filters = React.useMemo<string[]>(() => {
    if (!data) return [];
    
    // Get all filters groups from the gallery data and put the in a unique set
    const groups = new Set(data.map(({group}) => group).flat());

    // Return a sorted set of filters with 'all' as a no filter property
    return ['all', ...Array.from(groups).sort()];
  }, [data]);

  // Split data into columns to acheive a continuous grid pattern
  const splitData = React.useMemo(() => {
    if (filteredData.length === 0 || !screenType) return [];

    const columns = gridColumnCount[screenType];
    const grid: Shared.GalleryItem[][] = Array(columns).fill(0).map(_ => []);

    let currentColumn = 0;
    for (const item of filteredData) {
      grid[currentColumn].push(item);

      if (currentColumn === columns - 1) {
        currentColumn = 0;
      } else {
        currentColumn++;
      }
    }

    return grid;
  }, [screenType, filteredData]);

  const itemsCount = `${data.length}`.padStart(2, '0');
  const filteredItemsCount = `${filteredData.length}`.padStart(2, '0');

  const onFilter = (filter: string) => dispatch(setGalleryFilter(filter));

  const classes = buildClass(
    cls['root'],
    noOverflow && cls['offset'],
  );

  const filterClasses = (id: string) => buildClass(
    cls['filter'],
    filter === id && cls['filter-selected'],
  );

  React.useEffect(() => {
    if (seek && sectionRef.current) {
      sectionRef.current.scrollIntoView({behavior: 'smooth'});
      
      dispatch(seekGallery(false));
    }
  }, [seek, dispatch]);

  React.useEffect(() => {
    if (filter === 'all') {
      setFilteredData(data);
    } else {
      setFilteredData(data.filter(({group}) => group.includes(filter)));
    }
  }, [data, filter]);
  
  return (
    <section ref={sectionRef} id='gallery' className={classes}>
      <div className={cls['header']}>
        <h3 className={cls['section-title']}>MY GALLERY</h3>
      </div>
      <ul className={cls['filters']}>
        {filters.map((filter) => {
          return (
            <li key={filter}
                className={filterClasses(filter)}
                onClick={() => onFilter(filter)}>
              {filter}
            </li>
          );
        })}
      </ul>
      <p className={cls['info']}>{
        filter === 'all' ?
        `${itemsCount} total photos` :
        `${filteredItemsCount} "${filter}" photos out of ${itemsCount}`
      }</p>
      <ul className={cls['container-list']}>
        {splitData.map((items, key) => (
          <li key={key} className={cls['inner-list-w']}>
            <ul className={cls['inner-list']}>
              {items.map((item) => (
                <GalleryItem
                  key={item.id}
                  {...item}
                  onPreview={() => dispatch(setGalleryPreview(item.id))}
                />
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
}

//------------------------------------------------------------------------------

const GalleryItem: React.FC<GalleryItemProps> = (props) => {
  const {
    title,
    url,
    loader: [loaderAccent, loaderHeight, loaderWidth],
    group,
    onPreview,
  } = props;

  const loaderHeightPercent = ((loaderHeight / loaderWidth) * 100).toFixed();

  return (
    <li className={cls['item']} onClick={onPreview}>
      <div className={cls['content']}>
        <h1 className={cls['title']}>{title}</h1>
        <ul className={cls['categories']}>
          {group.map((category, key) => {
            return <li key={key} className={cls['category']}>{category}</li>
          })}
        </ul>
        <Icon className={cls['scale-icon']} prefix={ScaleIcon} />
      </div>
      <img
        className={cls['photo']}
        src={`${env.host}/${url}`}
        alt='gallery-photo'
      />
      <div
        className={cls['loader']}
        style={{
          paddingTop: `${loaderHeightPercent}%`,
          backgroundColor: loaderAccent,
        }}
      />
    </li>
  );
}

//------------------------------------------------------------------------------

interface GalleryItemProps extends Shared.GalleryItem {
  onPreview: () => void;
}

//------------------------------------------------------------------------------

const gridColumnCount: {[key: string]: number} = {
  'xl': 4,
  'lg': 3,
  'md': 2,
  'sm': 2,
  'xs': 1,
};

//------------------------------------------------------------------------------

export default Gallery;
