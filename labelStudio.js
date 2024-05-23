import LabelStudio from "label-studio";
import "label-studio/build/static/css/main.css";

const labelConfig = `<View>
      <RectangleLabels name="tag" toName="img">
        <Label value="Name"/>
        <Label value="Business Name"/>
      </RectangleLabels>
      <Image name="img" value="$image"/>
      </View>
      `;

function LabelStudioUI({ imageLocation, onClick, labelConfig }) {
    useEffect(() => {
        new LabelStudio("label-studio", {
            config: labelConfig,

            interfaces: [
                "panel",
                "update",
                "submit",
                "controls",
                "side-column",
                "annotations:menu",
                //"annotations:add-new",
                // "annotations:delete"
                // "predictions:menu"
            ],

            user: {
                pk: 1,
                firstName: "James",
                lastName: "Dean",
            },

            task: {
                annotations: [],
                predictions: [],
                id: 1,
                data: {
                    image: imageUrl,
                },
            },

            onLabelStudioLoad: function (LS) {
                var c = LS.annotationStore.addAnnotation({
                    userGenerate: true,
                });
                LS.annotationStore.selectAnnotation(c.id);
            },
            onSubmitAnnotation: async function (LS, annotation) {
                console.log(annotation.serializeAnnotation());
            },
            onUpdateAnnotation: async function (LS, annotation) {
                console.log(annotation.serializeAnnotation());

            }, [imageUrl, labelConfig]);