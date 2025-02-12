function welcome(name: string) {
    console.log('welcom,' + name);
    const user = {
        name: 'rahul',
    };

    const fname = user.name;

    return name + fname;
}

welcome('nikhil');
