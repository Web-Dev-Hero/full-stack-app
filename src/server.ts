function welcome(name: string) {
    console.log('welcom,' + name);
    console.log('hi there');
    const user = {
        name: 'rahul',
    };

    const fname = user.name;

    return name + fname;
}

welcome('nikhil');
