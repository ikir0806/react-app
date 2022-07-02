import { FC } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { StoreState } from 'src/store';
import { toggleProfile } from 'src/store/profile/actions';

export const About: FC = (props: any) => {
    return (
        <>
            <h2>About page</h2>

            <p>{props.name}</p>

            <input type="checkbox" checked={props.visible} readOnly />
            <button onClick={() => props.toggle()}>change visible</button>
        </>
    );
};

const mapStateToProps = (state: StoreState) => ({
    name: state.profile.name,
    visible: state.profile.visible,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    toggle: () => dispatch(toggleProfile()),
});

export const AboutWithConnect = connect(
    mapStateToProps,
    mapDispatchToProps
)(About);