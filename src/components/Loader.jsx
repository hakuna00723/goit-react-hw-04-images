import { Bars } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div className="Spinner">
      <Bars
       height="100"
       width="200"
       color="#3f41b5"
       ariaLabel="bars-loading"
       wrapperStyle={{}}
       wrapperClass=""
       visible={true}
      />
    </div>
  );
};

export default Loader;