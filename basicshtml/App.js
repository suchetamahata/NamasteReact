
const parent =
    React.createElement('div', { id: 'parent' },
        [
            React.createElement('div', { id: 'child' }, [
                React.createElement('h1', { id: 'notheading' }, 'I am a h1 tag'),
                React.createElement('h2', { id: 'heading' }, 'i am evil h2')]),
            React.createElement('div', { id: 'child' }, [
                React.createElement('h1', { id: 'notheading' }, 'I am a h1 tag'),
                React.createElement('h2', { id: 'heading' }, 'i am evil h2')])
        ])

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parent);
console.log(parent);