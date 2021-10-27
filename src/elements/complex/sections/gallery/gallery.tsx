import React from 'react';
import {Store} from 'store/types';
import {useDispatch, useSelector} from 'react-redux';

import {seekGallery, setGalleryFilter} from 'store/actions';

import buildClass from 'utility/build-class';

import cls from './gallery.module.scss';

//------------------------------------------------------------------------------

const Gallery: React.FC = () => {
  const galleryState = useSelector((store: Store.State) => store.gallery);
  const noOverflow = useSelector((store: Store.State) => store.noOverflow);
  
  const {
    data,
    filter,
    seek,
  } = galleryState;

  const dispatch = useDispatch();
  const sectionRef = React.useRef<HTMLElement | null>(null);

  // Get filters from gallery items
  const filters = React.useMemo<string[]>(() => {
    const groups: string[][] = [];

    // Get all the groups from gallery items
    for (const item of data) groups.push(item.group);

    // Create a unique sorted set of filters
    const groupSet = Array.from(new Set(groups.flat())).sort();

    // Add the 'all' filter to the filters
    return ['all', ...groupSet];
  }, [data]);

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
    </section>
  );
}

//------------------------------------------------------------------------------

export default Gallery;
