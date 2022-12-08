import Router from 'next/router';

export default function Home() {
  Router.push('/auth');
  return (<></>);
}
