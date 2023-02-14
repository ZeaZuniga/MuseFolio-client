import Button from "../../components/Button/Button";
import "./EditPage.scss";

export default function EditPage() {
  return (
    <div className="editpage">
      <h1 className="editpage__header">Need to make a change? Make it here!</h1>
      <form className="editpage__form">
        <section className="form__information">
          <label className="form__title--label">
            Title:
            <input className="form__title--text" type="text" name="title" />
          </label>
          <label className="form__composer--label">
            Composer:
            <input
              className="form__composer--text"
              type="text"
              name="composer"
            />
          </label>
        </section>
        <h3 className="form__checkbox--header">Tags:</h3>
        <section className="form__checkbox">
          <label htmlFor="symphonic" className="form__checkbox--label">
            Symphonic
            <input
              className="form__checkbox--box"
              type="checkbox"
              name="genres"
              value="symphonic"
              id="symphonic"
            />
          </label>
          <label htmlFor="tuba" className="form__checkbox--label">
            Tuba
            <input
              className="form__checkbox--box"
              type="checkbox"
              name="genres"
              value="tuba"
              id="tuba"
            />
          </label>
          <label htmlFor="jazz" className="form__checkbox--label">
            Jazz
            <input
              className="form__checkbox--box"
              type="checkbox"
              name="genres"
              value="jazz"
              id="jazz"
            />
          </label>
          <label htmlFor="piano" className="form__checkbox--label">
            Piano
            <input
              className="form__checkbox--box"
              type="checkbox"
              name="genres"
              value="piano"
              id="piano"
            />
          </label>
          <label htmlFor="romantic" className="form__checkbox--label">
            Romantic
            <input
              className="form__checkbox--box"
              type="checkbox"
              name="genres"
              value="romantic"
              id="romantic"
            />
          </label>
          <label htmlFor="self-composed" className="form__checkbox--label">
            Self Composed
            <input
              className="form__checkbox--box"
              type="checkbox"
              name="genres"
              value="self-composed"
              id="self-composed"
            />
          </label>
          <label htmlFor="lead-sheets" className="form__checkbox--label">
            Lead Sheets
            <input
              className="form__checkbox--box"
              type="checkbox"
              name="genres"
              value="lead sheets"
              id="lead-sheets"
            />
          </label>
          <label htmlFor="classic-soul" className="form__checkbox--label">
            Classic Soul
            <input
              className="form__checkbox--box"
              type="checkbox"
              name="genres"
              value="classic soul"
              id="classic-soul"
            />
          </label>
          <label htmlFor="studio-ghibli" className="form__checkbox--label">
            Studio Ghibli
            <input
              className="form__checkbox--box"
              type="checkbox"
              name="genres"
              value="Studio Ghibli"
              id="studio-ghibli"
            />
          </label>
        </section>
        <label className="form__favorite--label">
          Favorite:
          <input type="checkbox" className="form__favorite--box" />
        </label>
        <Button scssClass="button edit-submit" buttonText="Submit changes" />
      </form>
    </div>
  );
}
