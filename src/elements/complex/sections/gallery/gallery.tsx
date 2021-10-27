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

  const [
    filteredData,
    setFilteredData,
  ] = React.useState<Shared.GalleryItem[]>([]);

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
      setFilteredData([]);
    } else {
      setFilteredData(data.filter(({group}) => group.includes(filter)));
    }
  }, [filter]);
  
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
        `${data.length} total photos` :
        `${filteredData.length} "${filter}" photos out of ${data.length}`
      }</p>
    </section>
  );
}

//------------------------------------------------------------------------------

export default Gallery;
