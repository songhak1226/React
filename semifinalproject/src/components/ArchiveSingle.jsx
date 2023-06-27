import React from 'react'

const ArchiveSingle = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const itemIdentifier = pathname.replace('/ArchiveSingle/', '');

  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const itemResponse = await axios.get('http://localhost:8099/soolsool/archive');
        const foundItem = itemResponse.data.find((item) => item.arc_idx === itemIdentifier);
        setItem(foundItem);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [itemIdentifier]);

  if (!item) {
    return <div>찾을 수 없는 페이지입니다.</div>;
  }

   
  return (
    <div>    
        <div>ArchiveSingle</div>
        <div>작성자 : {item.mb_id}</div>
        <div>작성일: {item.arc_at}</div>
        <div className="arc-idx"><h1> 제목 : {item.arc_idx}</h1><br/></div>
        <div className="arc-title"><p>{item.arc_title}</p></div>
    <div>{item.arc_file}</div></div>
  )
}

export default ArchiveSingle