import { StyleSheet } from 'react-native';
import { setFontStyles } from '../../common/GlobalStyles';

export const styles = StyleSheet.create({
    sceneContainer: {
        paddingLeft: '20px',
        paddingRight: '20px',
    },
    buttonGameContainer: {
        marginTop: '20px',
        paddingLeft: '20px',
        paddingRight: '20px',
    },
    wrapperImage: {
        padding: '20px',
    },
    banner: {
        height: '300px',
        width: '100%',
        marginBottom: '20px',
    },
    banner2: {
        height: '288px',
        width: '100%',
        padding: '20px',
        backgroundSize: 'contain',
    },
    title: {
        textAlign: 'center',
        color: '#857251',
        marginBottom: '20px',
        ...setFontStyles({ weight: 700 }),
    },
    text: {
        textAlign: 'center',
        color: '#212121',
        marginBottom: '30px',
        ...setFontStyles({ weight: 300, size: '18px' }),
    },
    text4: {
        textAlign: 'center',
        color: '#212121',
        marginBottom: '30px',
        marginTop: '30px',
        ...setFontStyles({ weight: 300, size: '18px' }),
    },
    text2: {
        textAlign: 'center',
        color: '#857251',
        marginTop: '30px',
        marginBottom: '30px',
        ...setFontStyles({ weight: 700 }),
    },
    text3: {
        paddingLeft: '20px',
        paddingRight: '20px',
        ...setFontStyles({ size: '16px' }),
    },
    regButton: {
        textAlign: 'center',
        color: '#827153',
        marginBottom: '30px',
        borderRadius: 10,
        width: 'fit-content',
        ...setFontStyles(),
    }
});
