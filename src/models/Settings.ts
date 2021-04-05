export interface ISettings {
    projectName: string;
    description: string;
    apiBaseUrl: string;
    authBaseUrl: string;
}

const createSettings = (): ISettings => {
    const authUrl = 'https://reqres.in/api/login';
    const baseUrl = '';
    return <ISettings>{
        projectName: 'react-redux-typescript-webpack-starter-kit',
        description: '',
        apiBaseUrl: baseUrl,
        authBaseUrl: authUrl,
    };
};

const settings = createSettings();

export default settings;
